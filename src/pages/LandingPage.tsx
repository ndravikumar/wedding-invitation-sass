// src/pages/LandingPage.tsx
import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Button,
  Modal,
  AspectRatio,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

// This is where you'll define your available templates.
// The `previewComponent` would be your actual invitation component with sample data.
const templates = [
  {
    id: "subhalekha-classic",
    name: "Subhalekha Classic",
    description: "A timeless, traditional Telugu wedding invitation.",
    thumbnail: "https://i.imgur.com/example-thumb-1.png", // Replace with your thumbnail image
    previewComponent: <Text>Preview for Subhalekha Classic</Text>, // Replace with actual preview component
  },
  {
    id: "modern-flip",
    name: "Modern Flip Invite",
    description: "A sleek and modern design with a fun flip effect.",
    thumbnail: "https://i.imgur.com/example-thumb-2.png",
    previewComponent: <Text>Preview for Modern Flip Invite</Text>,
  },
  {
    id: "festive-south",
    name: "Festive South Indian",
    description: "Vibrant colors and festive motifs for a grand celebration.",
    thumbnail: "https://i.imgur.com/example-thumb-3.png",
    previewComponent: <Text>Preview for Festive South Indian</Text>,
  },
];

export default function LandingPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedTemplate, setSelectedTemplate] = useState<
    (typeof templates)[0] | null
  >(null);
  const navigate = useNavigate();

  const handlePreview = (template: (typeof templates)[0]) => {
    setSelectedTemplate(template);
    open();
  };

  const handleCustomize = () => {
    if (selectedTemplate) {
      // Navigate to the editor with the template ID as a query param
      // This will be a new "guest" editor page we'll need to build.
      navigate(`/editor?template=${selectedTemplate.id}`);
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={selectedTemplate?.name}
        size="xl"
        centered
      >
        {/* In a real scenario, you'd render the full interactive preview here */}
        {selectedTemplate?.previewComponent}
        <Button fullWidth mt="md" onClick={handleCustomize}>
          Customize This Design
        </Button>
      </Modal>

      <Container py="xl">
        <Title order={1} ta="center">
          Choose Your Perfect Invitation
        </Title>
        <Text c="dimmed" ta="center" mt="sm" mb="xl">
          Select a design to preview and customize. No account needed to start.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
          {templates.map((template) => (
            <Card
              key={template.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  src={template.thumbnail}
                  height={160}
                  alt={template.name}
                />
              </Card.Section>

              <Text fw={500} mt="md">
                {template.name}
              </Text>
              <Text size="sm" c="dimmed">
                {template.description}
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => handlePreview(template)}
              >
                Preview Design
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
