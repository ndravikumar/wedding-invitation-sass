// src/pages/PublicInvitationPage.tsx
import React, { useState, useEffect, useRef, forwardRef, Ref } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Invitation } from "../types";
import HTMLFlipBook from "react-pageflip";
import {
  Box,
  Paper,
  Title,
  Text,
  Center,
  Stack,
  Group,
  Divider,
  Button,
  Loader,
  Image,
} from "@mantine/core";
import { IconCalendar, IconClock, IconMapPin } from "@tabler/icons-react";

// Define a type for the ref
type FlipBookRef = {
  pageFlip: () => {
    flipNext: () => void;
  };
};

// --- Page Components ---
// We define our pages as separate components for cleanliness.
// The 'ref' is passed down by react-pageflip to manage the DOM element.

const CoverPage = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} data-density="hard">
      <Paper
        shadow="md"
        h="100%"
        radius={0}
        style={{ border: "2px solid #C19A6B", backgroundColor: "#800000" }}
      >
        <Center style={{ flexDirection: "column", height: "100%" }}>
          <Title
            order={1}
            style={{
              fontFamily: "'Tangerine', cursive",
              color: "#FFD700",
              fontSize: "5rem",
            }}
          >
            Subhalekha
          </Title>
          <Text c="white" mt="md">
            Click to Open
          </Text>
        </Center>
      </Paper>
    </div>
  );
});

const LeftPage = forwardRef(
  ({ invitation }: { invitation: Invitation }, ref: Ref<HTMLDivElement>) => {
    const formattedDate = new Date(invitation.event_date).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }
    );

    return (
      <div ref={ref}>
        <Paper
          h="100%"
          p="xl"
          radius={0}
          style={{ backgroundColor: "#FFFBF0" }}
        >
          <Stack align="center" gap="lg" h="100%">
            <Title
              order={3}
              style={{ fontFamily: "'Lora', serif", color: "#5D4037" }}
            >
              The Wedding Ceremony of
            </Title>
            <Stack align="center" gap={0}>
              <Title
                order={2}
                style={{
                  fontFamily: "'Tangerine', cursive",
                  fontSize: "3rem",
                  color: "#5D4037",
                }}
              >
                {invitation.groom_name}
              </Title>
              <Text
                size="sm"
                c="dimmed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Son of Sri & Smt. [Groom's Parents]
              </Text>
            </Stack>
            <Text
              style={{
                fontFamily: "'Tangerine', cursive",
                fontSize: "3rem",
                color: "#800000",
              }}
            >
              &
            </Text>
            <Stack align="center" gap={0}>
              <Title
                order={2}
                style={{
                  fontFamily: "'Tangerine', cursive",
                  fontSize: "3rem",
                  color: "#5D4037",
                }}
              >
                {invitation.bride_name}
              </Title>
              <Text
                size="sm"
                c="dimmed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Daughter of Sri & Smt. [Bride's Parents]
              </Text>
            </Stack>
          </Stack>
        </Paper>
      </div>
    );
  }
);

const RightPage = forwardRef(
  ({ invitation }: { invitation: Invitation }, ref: Ref<HTMLDivElement>) => {
    const formattedDate = new Date(invitation.event_date).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }
    );

    return (
      <div ref={ref}>
        <Paper
          h="100%"
          p="xl"
          radius={0}
          style={{ backgroundColor: "#FFFBF0" }}
        >
          <Stack align="center" gap="lg" h="100%">
            <Image src="/ganesha.svg" alt="Ganesha" width={60} />
            <Divider
              my="sm"
              label="on"
              labelPosition="center"
              style={{ width: "90%" }}
            />
            <Stack align="center" gap={0}>
              <Group gap="xs">
                <IconCalendar size={18} />
                <Text fw={500} style={{ fontFamily: "'Lora', serif" }}>
                  {formattedDate}
                </Text>
              </Group>
              <Group gap="xs" mt="xs">
                <IconClock size={18} />
                <Text style={{ fontFamily: "'Lora', serif" }}>
                  at [Event Time]
                </Text>
              </Group>
            </Stack>
            <Divider
              my="sm"
              label="at"
              labelPosition="center"
              style={{ width: "90%" }}
            />
            <Stack align="center" gap={0}>
              <Title order={5} style={{ fontFamily: "'Lora', serif" }}>
                [Venue Name]
              </Title>
              <Text
                ta="center"
                size="sm"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {invitation.venue_address || "[Full Venue Address]"}
              </Text>
              {invitation.Maps_link && (
                <Button
                  component="a"
                  href={invitation.Maps_link}
                  target="_blank"
                  variant="subtle"
                  size="xs"
                  color="orange"
                  leftSection={<IconMapPin size={14} />}
                >
                  View on Map
                </Button>
              )}
            </Stack>
          </Stack>
        </Paper>
      </div>
    );
  }
);

// --- Main Component ---
export default function PublicInvitationPage() {
  const { slug } = useParams<{ slug: string }>();
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const flipBookRef = useRef<FlipBookRef>(null);

  useEffect(() => {
    if (!slug) return;
    const fetchInvitation = async () => {
      const { data } = await supabase
        .from("invitations")
        .select("*")
        .eq("custom_url_slug", slug)
        .single();
      setInvitation(data);
    };
    fetchInvitation();
  }, [slug]);

  if (!invitation)
    return (
      <Center style={{ height: "100vh" }}>
        <Loader />
      </Center>
    );

  return (
    <Box
      style={{
        backgroundColor: "#FDF5E6",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HTMLFlipBook
        width={500}
        height={700}
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1536}
        size="fixed"
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        className=""
        ref={flipBookRef}
        style={{ margin: "0 auto" }}
        onFlip={() => {}}
      >
        <CoverPage />
        <LeftPage invitation={invitation} />
        <RightPage invitation={invitation} />
        {/* You can add more pages here for Story, Gallery, etc. */}
        <div data-density="hard">
          <Paper h="100%" radius={0} style={{ backgroundColor: "#800000" }} />
        </div>
      </HTMLFlipBook>
    </Box>
  );
}
