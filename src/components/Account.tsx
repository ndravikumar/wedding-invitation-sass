// src/components/Account.tsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Session } from "@supabase/supabase-js";
import { Invitation } from "../types";
import InvitationEditor from "./InvitationEditor";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Card,
  Loader,
  CopyButton,
  ActionIcon,
  Tooltip,
  TextInput,
  Paper,
  Avatar,
  Divider,
  SimpleGrid,
  Menu,
  Modal,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconCopy,
  IconCheck,
  IconPencil,
  IconTrash,
  IconDotsVertical,
  IconPhotoPlus,
} from "@tabler/icons-react";

type InvitationData = Omit<Invitation, "id" | "user_id" | "created_at">;
interface AccountProps {
  session: Session;
}

export default function Account({ session }: AccountProps) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [editorOpened, { open: openEditor, close: closeEditor }] =
    useDisclosure(false);
  const [editingInvite, setEditingInvite] = useState<Invitation | null>(null);
  const [
    deleteModalOpened,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);
  const [deletingInviteId, setDeletingInviteId] = useState<number | null>(null);

  useEffect(() => {
    getInvitations();
  }, [session]);

  const getInvitations = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("invitations")
      .select(`*`)
      .eq("user_id", session.user.id);
    if (data) setInvitations(data);
    setLoading(false);
  };

  const handleSignOut = async () => await supabase.auth.signOut();

  // This is the new, correct onSave function
  const onSave = async (data: InvitationData) => {
    setSaving(true);
    try {
      if (editingInvite) {
        // UPDATE logic
        const { error } = await supabase
          .from("invitations")
          .update(data)
          .eq("id", editingInvite.id);
        if (error) throw error;
      } else {
        // INSERT logic
        const dataToInsert = { ...data, user_id: session.user.id };
        const { error } = await supabase
          .from("invitations")
          .insert([dataToInsert]);
        if (error) throw error;
      }
      closeEditor();
      getInvitations();
      setEditingInvite(null);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  // Function to handle the Edit button click
  const handleEditClick = (invitationToEdit: Invitation) => {
    setEditingInvite(invitationToEdit);
    openEditor();
  };

  const handleDelete = async () => {
    if (!deletingInviteId) return;
    await supabase.from("invitations").delete().eq("id", deletingInviteId);
    getInvitations();
    closeDeleteModal();
    setDeletingInviteId(null);
  };

  const userFullName = session.user.user_metadata.full_name || "User";
  const userInitials = userFullName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Container my="xl">
      <Group justify="space-between">
        <Title order={2}>Your Dashboard</Title>
        <Button
          onClick={() => {
            setEditingInvite(null);
            openEditor();
          }}
        >
          + Create New Invitation
        </Button>
      </Group>
      <Divider my="md" />
      <Paper radius="md" p="lg" withBorder>
        <Group>
          <Avatar color="blue" radius="xl">
            {userInitials}
          </Avatar>
          <div>
            <Text fz="lg" fw={700}>
              {userFullName}
            </Text>
            <Text fz="sm" c="dimmed">
              {session.user.email}
            </Text>
          </div>
          <Button
            onClick={handleSignOut}
            variant="default"
            style={{ marginLeft: "auto" }}
          >
            Sign Out
          </Button>
        </Group>
      </Paper>
      <Title order={3} mt="xl" mb="md">
        Your Invitations
      </Title>

      {loading ? (
        <Center>
          <Loader />
        </Center>
      ) : invitations.length === 0 ? (
        <Paper withBorder p="xl" radius="md" style={{ textAlign: "center" }}>
          <Center>
            <IconPhotoPlus size={48} stroke={1.5} color="gray" />
          </Center>
          <Title order={4} mt="md">
            No invitations yet
          </Title>
          <Text c="dimmed" mt="xs" mb="md">
            Get started by creating your first digital invitation.
          </Text>
          <Button
            onClick={() => {
              setEditingInvite(null);
              openEditor();
            }}
            size="md"
          >
            Create Invitation
          </Button>
        </Paper>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {invitations.map((invite) => (
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              key={invite.id}
            >
              <Group justify="space-between">
                <Text fw={500}>
                  {invite.groom_name} & {invite.bride_name}
                </Text>
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <ActionIcon variant="subtle">
                      <IconDotsVertical size="1rem" />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {/* --- THIS IS THE CORRECTED LINE --- */}
                    <Menu.Item
                      leftSection={<IconPencil size={14} />}
                      onClick={() => handleEditClick(invite)}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      color="red"
                      leftSection={<IconTrash size={14} />}
                      onClick={() => {
                        setDeletingInviteId(invite.id);
                        openDeleteModal();
                      }}
                    >
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
              <Text size="sm" c="dimmed">
                Event Date: {new Date(invite.event_date).toLocaleDateString()}
              </Text>
              <Group mt="md">
                <TextInput
                  readOnly
                  style={{ flex: 1 }}
                  value={`${window.location.origin}/invite/${invite.custom_url_slug}`}
                />
                <CopyButton
                  value={`${window.location.origin}/invite/${invite.custom_url_slug}`}
                  timeout={2000}
                >
                  {({ copied, copy }) => (
                    <Tooltip label={copied ? "Copied" : "Copy"} withArrow>
                      <ActionIcon
                        color={copied ? "teal" : "gray"}
                        onClick={copy}
                      >
                        {copied ? (
                          <IconCheck size="1rem" />
                        ) : (
                          <IconCopy size="1rem" />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      )}

      <Modal
        opened={editorOpened}
        onClose={() => {
          setEditingInvite(null);
          closeEditor();
        }}
        title={editingInvite ? "Edit Invitation" : "Create New Invitation"}
        centered
      >
        <InvitationEditor
          onSave={onSave}
          invitationToEdit={editingInvite}
          isLoading={saving}
        />
      </Modal>

      <Modal
        opened={deleteModalOpened}
        onClose={closeDeleteModal}
        title="Confirm Deletion"
        centered
      >
        <Text>
          Are you sure you want to delete this invitation? This action is
          permanent.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button color="red" onClick={handleDelete}>
            Delete Invitation
          </Button>
        </Group>
      </Modal>
    </Container>
  );
}
