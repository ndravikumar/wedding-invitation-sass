/** @jsxImportSource @emotion/react */
// src/invitation-templates/SubhalekhaClassic.tsx
import React, { useRef, forwardRef, Ref } from "react";
import HTMLFlipBook from "react-pageflip";
import {
  Box,
  Paper,
  Title,
  Text,
  Stack,
  Image,
  useMantineTheme,
  Divider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  pageWrapperStyle,
  pageInnerStyle,
  coverPageStyle,
  coverStackStyle,
  titleStyle,
  textWedsStyle,
  clickToOpenStyle,
  leftTitleStyle,
  leftTextStyle,
  dividerLabelStyle,
  rightTitleStyle,
  rightTextStyle,
  backCoverBoxStyle,
  backCoverTextStyle,
  backCoverTitleStyle,
  backCoverNamesStyle,
  backCoverBlessingStyle,
  bookContainerStyle,
} from "./SubhalekhaClassic.styles";

// Reusable component for the page background and content frame
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <Paper css={pageWrapperStyle}>
    <Paper css={pageInnerStyle}>{children}</Paper>
  </Paper>
);

const CoverPage = forwardRef(
  ({ isMobile }: { isMobile: boolean }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} data-density="hard">
      <Paper
        shadow="md"
        css={coverPageStyle(isMobile)}
      >
        <Stack
          align="center"
          gap={0}
          css={coverStackStyle(isMobile)}
        >
          <Title order={3} css={titleStyle(isMobile)}>
            Teja
          </Title>
          <Text
            my={isMobile ? "0.1rem" : "xs"}
            css={textWedsStyle(isMobile)}
          >
            weds
          </Text>
          <Title order={3} css={titleStyle(isMobile)}>
            RaviKumar
          </Title>
          <Text
            c="white"
            mt="xl"
            fz="xs"
            css={clickToOpenStyle}
          >
            Click to Open
          </Text>
        </Stack>
      </Paper>
    </div>
  )
);

const LeftPage = forwardRef(
  ({ isMobile }: { isMobile: boolean }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <PageWrapper>
        <Text
          c="#6D4C41"
          css={leftTextStyle}
          fz={isMobile ? "xs" : "sm"}
        >
          Together with their families
        </Text>
        <Stack align="center" gap={isMobile ? 2 : 5}>
          <Title
            order={2}
            ta="center"
            css={leftTitleStyle(isMobile)}
          >
            Naramala RaviKumar
          </Title>
          <Text
            size="sm"
            c="dimmed"
            mt={-10}
            fz={isMobile ? "xs" : "sm"}
            css={leftTextStyle}
          >
            Son of Sri N. [Father's Name] & Smt. N. [Mother's Name]
          </Text>
        </Stack>
        <Divider
          my={isMobile ? "sm" : "md"}
          w="50%"
          labelPosition="center"
          label={
            <Text
              css={dividerLabelStyle(isMobile)}
            >
              &
            </Text>
          }
        />
        <Stack align="center" gap={isMobile ? 2 : 5}>
          <Title
            order={2}
            ta="center"
            css={leftTitleStyle(isMobile)}
          >
            [Bride's Full Name]
          </Title>
          <Text
            size="sm"
            c="dimmed"
            mt={-10}
            fz={isMobile ? "xs" : "sm"}
            css={leftTextStyle}
          >
            Daughter of Sri [Father's Name] & Smt. [Mother's Name]
          </Text>
        </Stack>
        <Text
          c="#6D4C41"
          mt="lg"
          css={leftTextStyle}
          fz={isMobile ? "xs" : "sm"}
        >
          request the honor of your presence
        </Text>
      </PageWrapper>
    </div>
  )
);

const RightPage = forwardRef(
  ({ isMobile }: { isMobile: boolean }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <PageWrapper>
        <Text
          ta="center"
          css={rightTextStyle}
          fz={isMobile ? "xs" : "sm"}
        >
          As they exchange vows and begin their new life together
        </Text>
        <Image src="/ganesha-gold.svg" alt="Ganesha" w={isMobile ? 40 : 50} />
        <Stack align="center" gap={isMobile ? 2 : 5}>
          <Title
            order={4}
            ta="center"
            css={rightTitleStyle(isMobile)}
          >
            on Sunday, the Eighteenth of August
          </Title>
          <Title
            order={5}
            css={rightTextStyle}
          >
            Two Thousand and Twenty-Four
          </Title>
          <Text
            css={rightTextStyle}
            fz={isMobile ? "sm" : "md"}
          >
            at Half-past Eight in the Evening
          </Text>
        </Stack>
        <Stack align="center" gap={isMobile ? 2 : 5}>
          <Title
            order={4}
            css={rightTitleStyle(isMobile)}
          >
            at [Venue Name]
          </Title>
          <Text
            ta="center"
            size="sm"
            fz={isMobile ? "xs" : "sm"}
            css={rightTextStyle}
          >
            [Venue Address, Bhimavaram]
          </Text>
        </Stack>
        <Text
          size="sm"
          ta="center"
          c="dimmed"
          css={rightTextStyle}
          fz={isMobile ? "xs" : "sm"}
        >
          Reception to follow
        </Text>
      </PageWrapper>
    </div>
  )
);

const StoryPage = forwardRef(
  ({ isMobile }: { isMobile: boolean }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <PageWrapper>
        <Title
          order={2}
          css={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#800000",
            fontSize: isMobile ? "1.8rem" : "2.2rem",
          }}
        >
          Our Story
        </Title>
        <Image
          radius="md"
          src="/couple-photo.jpg"
          alt="Ravi & Teja"
          w={isMobile ? "70%" : "60%"}
          style={{ border: "3px solid #D3B88C" }}
        />
        <Text
          ta="center"
          fz={isMobile ? "xs" : "sm"}
          css={{
            fontFamily: "'Lora', serif",
            fontStyle: "italic",
            color: "#6D4C41",
            lineHeight: 1.6,
          }}
        >
          Our journey began unexpectedly, a shared smile turned into a
          conversation that sparked a connection that would change our lives
          forever. We are overjoyed to take this next step and begin our
          forever, together, with you by our side.
        </Text>
      </PageWrapper>
    </div>
  )
);

const EventsPage = forwardRef(
  ({ isMobile }: { isMobile: boolean }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <PageWrapper>
        <Title
          order={2}
          css={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#800000",
            fontSize: isMobile ? "1.8rem" : "2.2rem",
          }}
        >
          Wedding Events
        </Title>
        <Stack w="100%" gap={isMobile ? "md" : "lg"}>
          <Box>
            <Title
              order={4}
              css={{
                fontFamily: "'Lora', serif",
                color: "#6D4C41",
                fontSize: isMobile ? "1rem" : "1.2rem",
              }}
            >
              Sangeet
            </Title>
            <Text
              fz={isMobile ? "xs" : "sm"}
              css={leftTextStyle}
            >
              Join us for an evening of music and dance to celebrate the union.
            </Text>
            <Text fz={isMobile ? "0.6rem" : "xs"} c="dimmed">
              Sat, 17th August 2024 at 7:00 PM | [Sangeet Venue]
            </Text>
          </Box>
          <Divider />
          <Box>
            <Title
              order={4}
              css={{
                fontFamily: "'Lora', serif",
                color: "#6D4C41",
                fontSize: isMobile ? "1rem" : "1.2rem",
              }}
            >
              Kalyanam
            </Title>
            <Text
              fz={isMobile ? "xs" : "sm"}
              css={leftTextStyle}
            >
              The sacred ceremony where we tie the knot.
            </Text>
            <Text fz={isMobile ? "0.6rem" : "xs"} c="dimmed">
              Sun, 18th August 2024 at 8:30 PM | [Wedding Venue]
            </Text>
          </Box>
          <Divider />
          <Box>
            <Title
              order={4}
              css={{
                fontFamily: "'Lora', serif",
                color: "#6D4C41",
                fontSize: isMobile ? "1rem" : "1.2rem",
              }}
            >
              Reception
            </Title>
            <Text
              fz={isMobile ? "xs" : "sm"}
              css={leftTextStyle}
            >
              Celebrate with us at the post-wedding feast.
            </Text>
            <Text fz={isMobile ? "0.6rem" : "xs"} c="dimmed">
              Mon, 19th August 2024 at 7:30 PM | [Reception Venue]
            </Text>
          </Box>
        </Stack>
      </PageWrapper>
    </div>
  )
);

const BackCoverPage = forwardRef(
  ({ isMobile }: { isMobile: boolean }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} data-density="hard">
      <Paper
        h="100%"
        radius={0}
        style={{
          backgroundImage: "url(/subhalekha-back.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box css={backCoverBoxStyle}>
          <Stack align="center" gap="sm">
            <Text
              css={backCoverTextStyle(isMobile)}
            >
              With Best Compliments From:
            </Text>
            <Text
              css={backCoverTitleStyle(isMobile)}
            >
              The Families of
            </Text>
            <Text
              css={backCoverNamesStyle(isMobile)}
            >
              RaviKumar & Teja
            </Text>
            <Text
              mt="lg"
              fz={isMobile ? "xs" : "sm"}
              c="#FFF8E1"
              css={backCoverBlessingStyle(isMobile)}
            >
              Your presence is our greatest blessing.
            </Text>
          </Stack>
        </Box>
      </Paper>
    </div>
  )
);

export default function SubhalekhaClassic() {
  const flipBookRef = useRef<any>(null);
  const theme = useMantineTheme();
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  let bookWidth = 500;
  let bookHeight = 700;
  if (isMobile) {
    bookWidth = 320;
    bookHeight = 500;
  } else if (isTablet) {
    bookWidth = 420;
    bookHeight = 620;
  }

  return (
    <Box css={bookContainerStyle}>
      <HTMLFlipBook
        width={bookWidth}
        height={bookHeight}
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1350}
        size="fixed"
        startPage={0}
        ref={flipBookRef}
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
        showCover={true}
      >
        <CoverPage isMobile={isMobile} />
        <LeftPage isMobile={isMobile} />
        <RightPage isMobile={isMobile} />
        <StoryPage isMobile={isMobile} />
        <EventsPage isMobile={isMobile} />
        <BackCoverPage isMobile={isMobile} />
      </HTMLFlipBook>
    </Box>
  );
}
