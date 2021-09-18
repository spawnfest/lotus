defmodule Lotus.Catalogue.Button.Example03 do
  use Surface.Catalogue.Example,
    subject: Lotus.Button,
    catalogue: Lotus.Catalogue,
    title: "Button (Classes)",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Button class="uk-button uk-button-primary uk-button-large">Large Primary Button</Button>
    <Button class="uk-button uk-button-secondary uk-button-small">Small Secondary Button</Button>
    """
  end
end
