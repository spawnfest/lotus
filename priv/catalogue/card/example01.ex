defmodule Lotus.Catalogue.Card.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Card,
    catalogue: Lotus.Catalogue,
    title: "Card",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Card>Default</Card>
    """
  end
end
