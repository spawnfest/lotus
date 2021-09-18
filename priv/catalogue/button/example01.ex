defmodule Lotus.Catalogue.Button.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Button,
    catalogue: Lotus.Catalogue,
    title: "Button (Kinds)",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Button label="No Slots" class="uk-button" />
    <Button kind="default">Default</Button>
    <Button kind="primary">Primary</Button>
    <Button kind="secondary">Secondary</Button>
    <Button kind="danger">Danger</Button>
    <Button kind="text">Text</Button>
    <Button kind="link">Link</Button>
    """
  end
end
