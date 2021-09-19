defmodule Lotus.Catalogue.Card.Example02 do
  use Surface.Catalogue.Example,
    subject: Lotus.Card,
    catalogue: Lotus.Catalogue,
    title: "Card",
    height: "120px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Card body size="large" color="primary">
      Default
    </Card>
    """
  end
end
