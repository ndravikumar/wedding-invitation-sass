import React, { useState, useEffect } from "react";
import { Stack, TextInput, Button } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Invitation } from "../types";

type InvitationData = Omit<Invitation, "id" | "user_id" | "created_at">;

interface InvitationEditorProps {
  onSave: (data: InvitationData) => void;
  invitationToEdit?: Invitation | null;
  isLoading?: boolean;
}

export default function InvitationEditor({
  onSave,
  invitationToEdit,
  isLoading,
}: InvitationEditorProps) {
  const [groomName, setGroomName] = useState("");
  const [brideName, setBrideName] = useState("");
  const [eventDate, setEventDate] = useState<Date | null>(null);

  useEffect(() => {
    if (invitationToEdit) {
      setGroomName(invitationToEdit.groom_name);
      setBrideName(invitationToEdit.bride_name);
      setEventDate(new Date(invitationToEdit.event_date));
    }
  }, [invitationToEdit]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!eventDate) return alert("Please select a date.");

    const slug = `${groomName.toLowerCase().replace(/\s/g, "-")}-and-${brideName
      .toLowerCase()
      .replace(/\s/g, "-")}`;

    onSave({
      groom_name: groomName,
      bride_name: brideName,
      event_date: eventDate.toISOString().split("T")[0],
      custom_url_slug: slug,
      venue_address: invitationToEdit?.venue_address || "", // Pass existing or empty data
      Maps_link: invitationToEdit?.Maps_link || "",
    //   event_time: invitationToEdit?.event_time || "", // Pass existing or empty data
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          withAsterisk
          label="Groom's Name"
          value={groomName}
          onChange={(e) => setGroomName(e.target.value)}
          required
        />
        <TextInput
          withAsterisk
          label="Bride's Name"
          value={brideName}
          onChange={(e) => setBrideName(e.target.value)}
          required
        />
        <DatePickerInput
          withAsterisk
          label="Event Date"
          value={eventDate}
          onChange={(value) => setEventDate(value ? new Date(value) : null)}
          required
        />
        <Button type="submit" loading={isLoading} mt="md">
          {invitationToEdit ? "Update Invitation" : "Save Invitation"}
        </Button>
      </Stack>
    </form>
  );
}
