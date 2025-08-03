// src/invitation-templates/SubhalekhaClassic.tsx
import React, { useRef, forwardRef, Ref } from "react";
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
  Image,
} from "@mantine/core";

type FlipBookRef = { pageFlip: () => { flipNext: () => void } };

// ===================================================================
// Reusable component for the page background and the new content frame
// ===================================================================
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <Paper
    h="100%"
    radius={0}
    style={{
      backgroundColor: "#FFF8E1",
      backgroundImage: "url(/paisley-background.png)",
      backgroundRepeat: "repeat",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}
  >
    <Paper
      h="100%"
      w="100%"
      p="xl"
      style={{
        // This is the semi-transparent overlay
        backgroundColor: "rgba(255, 248, 225, 0.85)",
        backdropFilter: "blur(1px)", // Optional: adds a subtle blur effect
      }}
    >
      {children}
    </Paper>
  </Paper>
);

// ===================================================================
// Cover Page (No changes)
// ===================================================================
const CoverPage = forwardRef(
  (props: { children: React.ReactNode }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} data-density="hard">
      <Paper
        shadow="md"
        h="100%"
        radius={0}
        p="md"
        style={{
          backgroundImage: "url(/subhalekha-cover.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Stack
          align="center"
          gap={0}
          style={{ paddingBottom: "5rem", color: "white" }}
        >
          <Title
            order={3}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              opacity: 0.95,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Teja
          </Title>
          <Text my="xs" style={{ fontFamily: "'Lora', serif", opacity: 0.8 }}>
            weds
          </Text>
          <Title
            order={3}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              opacity: 0.95,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            RaviKumar
          </Title>
          <Text
            c="white"
            mt="xl"
            fz="xs"
            style={{ fontFamily: "'Lora', serif", opacity: 0.7 }}
          >
            Click to Open
          </Text>
        </Stack>
      </Paper>
    </div>
  )
);

// ===================================================================
// Left Page (UPDATED with new wrapper and text colors)
// ===================================================================
const LeftPage = forwardRef(
  (props: { children: React.ReactNode }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <PageWrapper>
        <Stack justify="center" align="center" h="100%" gap="lg">
          <Text c="#6D4C41" style={{ fontFamily: "'Lora', serif" }}>
            Together with their families
          </Text>
          <Title
            order={2}
            ta="center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#800000",
              lineHeight: 1.2,
            }}
          >
            Naramala RaviKumar
          </Title>
          <Text
            size="sm"
            c="dimmed"
            mt={-15}
            style={{ fontFamily: "'Lora', serif" }}
          >
            Son of Sri N. [Father's Name] & Smt. N. [Mother's Name]
          </Text>
          <Divider
            my="md"
            w="50%"
            labelPosition="center"
            label={
              <Text
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  color: "#B08D57",
                }}
              >
                &
              </Text>
            }
          />
          <Title
            order={2}
            ta="center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#800000",
              lineHeight: 1.2,
            }}
          >
            [Bride's Full Name]
          </Title>
          <Text
            size="sm"
            c="dimmed"
            mt={-15}
            style={{ fontFamily: "'Lora', serif" }}
          >
            Daughter of Sri [Father's Name] & Smt. [Mother's Name]
          </Text>
          <Text c="#6D4C41" mt="xl" style={{ fontFamily: "'Lora', serif" }}>
            request the honor of your presence
          </Text>
        </Stack>
      </PageWrapper>
    </div>
  )
);

// ===================================================================
// Right Page (UPDATED with new wrapper and text colors)
// ===================================================================
const RightPage = forwardRef(
  (props: { children: React.ReactNode }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <PageWrapper>
        <Stack justify="space-between" align="center" h="100%">
          <Text
            ta="center"
            style={{ fontFamily: "'Lora', serif", fontStyle: "italic" }}
          >
            As they exchange vows and begin their new life together
          </Text>
          <Image src="/ganesha-gold.svg" alt="Ganesha" w={50} />
          <Stack align="center" gap={5}>
            <Title
              order={4}
              style={{ fontFamily: "'Lora', serif", color: "#800000" }}
            >
              on Sunday, the Eighteenth of August
            </Title>
            <Title
              order={5}
              style={{ fontFamily: "'Lora', serif", color: "#6D4C41" }}
            >
              Two Thousand and Twenty-Four
            </Title>
            <Text style={{ fontFamily: "'Lora', serif" }}>
              at Half-past Eight in the Evening
            </Text>
          </Stack>
          <Stack align="center" gap={5}>
            <Title
              order={4}
              style={{ fontFamily: "'Lora', serif", color: "#800000" }}
            >
              at [Venue Name]
            </Title>
            <Text ta="center" size="sm" style={{ fontFamily: "'Lora', serif" }}>
              [Venue Address, Bhimavaram]
            </Text>
          </Stack>
          <Text
            size="sm"
            ta="center"
            c="dimmed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Reception to follow
          </Text>
        </Stack>
      </PageWrapper>
    </div>
  )
);

// ===================================================================
// Story Page (UPDATED with new wrapper and text colors)
// ===================================================================
const StoryPage = forwardRef(
  (props: { children: React.ReactNode }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <PageWrapper>
        <Stack align="center" h="100%" gap="lg">
          <Title
            order={2}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#800000",
            }}
          >
            Our Story
          </Title>
          <Image
            radius="md"
            src="/couple-photo.jpg"
            alt="Ravi & Teja"
            w={250}
            style={{ border: "3px solid #D3B88C" }}
          />
          <Text
            ta="center"
            fz="sm"
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              color: "#6D4C41",
            }}
          >
            Our journey began unexpectedly, guided by fate...
          </Text>
        </Stack>
      </PageWrapper>
    </div>
  )
);

// ===================================================================
// Events Page (UPDATED with new wrapper and text colors)
// ===================================================================
const EventsPage = forwardRef(
  (props: { children: React.ReactNode }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <PageWrapper>
        <Stack align="center" h="100%" gap="lg">
          <Title
            order={2}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#800000",
            }}
          >
            Wedding Events
          </Title>
          <Stack w="100%">
            <Box>
              <Title
                order={4}
                style={{ fontFamily: "'Lora', serif", color: "#6D4C41" }}
              >
                Sangeet
              </Title>
              <Text size="sm" style={{ fontFamily: "'Lora', serif" }}>
                Join us for an evening of music and dance to celebrate the
                union.
              </Text>
              <Text size="xs" c="dimmed">
                Sat, 17th August 2024 at 7:00 PM | [Sangeet Venue]
              </Text>
            </Box>
            <Divider />
            <Box>
              <Title
                order={4}
                style={{ fontFamily: "'Lora', serif", color: "#6D4C41" }}
              >
                Kalyanam
              </Title>
              <Text size="sm" style={{ fontFamily: "'Lora', serif" }}>
                The sacred ceremony where we tie the knot.
              </Text>
              <Text size="xs" c="dimmed">
                Sun, 18th August 2024 at 8:30 PM | [Wedding Venue]
              </Text>
            </Box>
            <Divider />
            <Box>
              <Title
                order={4}
                style={{ fontFamily: "'Lora', serif", color: "#6D4C41" }}
              >
                Reception
              </Title>
              <Text size="sm" style={{ fontFamily: "'Lora', serif" }}>
                Celebrate with us at the post-wedding feast.
              </Text>
              <Text size="xs" c="dimmed">
                Mon, 19th August 2024 at 7:30 PM | [Reception Venue]
              </Text>
            </Box>
          </Stack>
        </Stack>
      </PageWrapper>
    </div>
  )
);

// ===================================================================
// Main Component that assembles the book
// ===================================================================
export default function SubhalekhaClassic() {
  const flipBookRef = useRef<any>(null);

  return (
    <Box
      style={{
        backgroundColor: "#D7CCC8",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <HTMLFlipBook
        width={500}
        height={700}
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1350}
        size="fixed"
        startPage={0}
        ref={flipBookRef}
        showCover={true}
        flippingTime={1000}
        style={{ margin: "auto" }}
        className="subhalekha-book"
        mobileScrollSupport={true}
        useMouseEvents={true}
        drawShadow={true}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        swipeDistance={30}
        disableFlipByClick={false}
        maxShadowOpacity={0.5}
        showPageCorners={true}
      >
        <CoverPage>Subhalekha Cover</CoverPage>
        <LeftPage>Groom & Bride</LeftPage>
        <RightPage>Event Details</RightPage>
        <StoryPage>Our Story</StoryPage>
        <EventsPage>Wedding Events</EventsPage>

        {/* --- UPDATED AND CORRECTED LAST PAGE --- */}
        <div data-density="hard">
          <Paper
            h="100%"
            radius={0}
            p="xl"
            style={{
              backgroundImage: "url(/subhalekha-back.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Stack align="center" gap="sm">
              <Text
                style={{
                  fontFamily: "'Lora', serif",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  color: "#FFF8E1",
                  opacity: 0.8,
                }}
              >
                With Best Compliments From:
              </Text>
              <Text
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  color: "white",
                }}
              >
                The Families of
              </Text>
              <Text
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "1rem",
                  color: "#FFF8E1",
                  opacity: 0.9,
                }}
              >
                RaviKumar & Teja
              </Text>
              <Text
                mt="xl"
                size="sm"
                c="#FFF8E1"
                style={{ fontFamily: "'Lora', serif", opacity: 0.7 }}
              >
                Your presence is our greatest blessing.
              </Text>
            </Stack>
          </Paper>
        </div>
      </HTMLFlipBook>
    </Box>
  );
}
