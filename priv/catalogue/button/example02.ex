defmodule Lotus.Catalogue.Button.Example02 do
  use Surface.Catalogue.Example,
    subject: Lotus.Button,
    catalogue: Lotus.Catalogue,
    title: "Button (Sizes)",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Button kind="default" size="small">Default Size</Button>
    <Button kind="primary" size="small">Small</Button>
    <Button kind="danger" size="large">Large</Button>
    """
  end
end
