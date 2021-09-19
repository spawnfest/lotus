defmodule Lotus.Catalogue.CardTitle.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CardTitle,
    catalogue: Lotus.Catalogue,
    title: "CardTitle",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CardTitle>Default</CardTitle>
    """
  end
end
