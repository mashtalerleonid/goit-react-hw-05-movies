import React from "react";
import { useState } from "react";
import { Container, Form, Button, Label, Input } from "./SearchForm.styled";
import makeNotification from "services/notification";

export default function SearchForm({ submit }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (query === "") {
      makeNotification("Enter something");
      return;
    }

    submit(query);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>

        <Input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </Form>
    </Container>
  );
}
