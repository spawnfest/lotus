defmodule Lotus.Catalogue.Heading.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Heading,
    catalogue: Lotus.Catalogue,
    title: "Heading",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Heading>Default</Heading>
    """
  end
end
