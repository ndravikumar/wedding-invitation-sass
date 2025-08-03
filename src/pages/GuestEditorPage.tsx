// src/pages/GuestEditorPage.tsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Invitation } from "../types";
import InvitationEditor from "../components/InvitationEditor";
import Auth from "../components/Auth";
import PublicInvitationPage from "./PublicInvitationPage"; // We will use this for the preview!
import {
  Container,
  Grid,
  Title,
  Button,
  Modal,
  Paper,
  Text,
  Center,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { Session } from "@supabase/supabase-js";

type InvitationData = Omit<Invitation, "id" | "user_id" | "created_at">;

export default function GuestEditorPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const [isSaving, setIsSaving] = useState(false);

  // This state will hold the live data from the editor for the preview
  const [liveInvitationData, setLiveInvitationData] = useState<InvitationData>({
    groom_name: "Groom",
    bride_name: "Bride",
    event_date: new Date().toISOString(),
    custom_url_slug: "preview",
    venue_address: "Your Venue Address",
    Maps_link: "",
  });

  // Listen for login/signup success to save the data
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession && isSaving) {
        saveInvitationForUser(newSession.user.id);
      }
    });
    return () => subscription.unsubscribe();
  }, [isSaving, liveInvitationData]);

  // This function is called by the editor every time a field changes
  const handleEditorUpdate = (data: InvitationData) => {
    setLiveInvitationData(data);
  };

  const handleFinalSaveClick = () => {
    // Mark that we are in the process of saving
    setIsSaving(true);
    // If user is already logged in, save immediately. Otherwise, open modal.
    if (session) {
      saveInvitationForUser(session.user.id);
    } else {
      openModal();
    }
  };

  const saveInvitationForUser = async (userId: string) => {
    if (!liveInvitationData) return;

    try {
      const dataToInsert = { ...liveInvitationData, user_id: userId };
      const { error } = await supabase
        .from("invitations")
        .insert([dataToInsert]);
      if (error) throw error;

      alert("Your invitation has been saved to your account!");
      navigate("/dashboard");
    } catch (error: any) {
      alert(`Error saving invitation: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => {
          setIsSaving(false);
          closeModal();
        }}
        title="Save Your Invitation"
        centered
      >
        <Text size="sm" mb="md">
          Please create an account or log in to save your progress and get your
          shareable link.
        </Text>
        <Auth />
      </Modal>

      <Container my="xl" fluid>
        <Grid>
          {/* --- The Editor Panel (Left) --- */}
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Paper
              withBorder
              shadow="md"
              p="md"
              radius="md"
              style={{ position: "sticky", top: "20px" }}
            >
              <Title order={2} ta="center">
                Customize
              </Title>
              <Text c="dimmed" mb="lg" ta="center" size="sm">
                Your preview will update as you type.
              </Text>
              <InvitationEditor
                onSave={handleEditorUpdate}
                // We pass a new prop `liveData` so editor can be controlled
                // Let's modify the editor to accept this and call onSave onChange
              />
              <Button
                onClick={handleFinalSaveClick}
                loading={isSaving}
                fullWidth
                mt="xl"
              >
                Save & Get Link
              </Button>
            </Paper>
          </Grid.Col>

          {/* --- The Live Preview Panel (Right) --- */}
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <Title order={2} ta="center">
              Live Preview
            </Title>
            <Box
              mt="lg"
              style={{ transform: "scale(0.8)", transformOrigin: "top center" }}
            >
              {/* Here we would render a preview component */}
              {/* For now, let's just display the data */}
              <Paper withBorder p="md" shadow="sm">
                <Text>
                  <strong>Groom:</strong> {liveInvitationData.groom_name}
                </Text>
                <Text>
                  <strong>Bride:</strong> {liveInvitationData.bride_name}
                </Text>
                <Text>
                  <strong>Date:</strong>{" "}
                  {liveInvitationData.event_date.toString()}
                </Text>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
