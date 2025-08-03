// src/components/Auth.tsx
import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import {
  Container,
  Title,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("naramalaravi@gmail.com");
  const [password, setPassword] = useState("Naramala");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error: any) {
      notifications.show({
        color: "red",
        title: "Login Error",
        message: error.error_description || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name, // This will store the name
          },
        },
      });
      if (error) throw error;
      notifications.show({
        color: "green",
        title: "Success",
        message: "Please check your email for a confirmation link.",
      });
    } catch (error: any) {
      notifications.show({
        color: "red",
        title: "Sign Up Error",
        message: error.error_description || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Log in or create an account to continue
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Tabs defaultValue="login">
          <Tabs.List grow>
            <Tabs.Tab value="login">Login</Tabs.Tab>
            <Tabs.Tab value="signup">Sign Up</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="login" pt="xs">
            <form onSubmit={handleLogin}>
              <Stack mt="md">
                <TextInput
                  required
                  label="Email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Stack>
              <Button type="submit" loading={loading} fullWidth mt="xl">
                Login
              </Button>
            </form>
          </Tabs.Panel>

          <Tabs.Panel value="signup" pt="xs">
            <form onSubmit={handleSignUp}>
              <Stack mt="md">
                <TextInput
                  required
                  label="Full Name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextInput
                  required
                  label="Email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Stack>
              <Button type="submit" loading={loading} fullWidth mt="xl">
                Sign Up
              </Button>
            </form>
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Container>
  );
}
