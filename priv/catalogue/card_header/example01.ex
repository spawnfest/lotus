defmodule Lotus.Catalogue.CardHeader.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CardHeader,
    catalogue: Lotus.Catalogue,
    title: "CardHeader",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CardHeader>Default</CardHeader>
    """
  end
end
