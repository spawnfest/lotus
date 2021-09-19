defmodule Lotus.Catalogue.Heading.Playground do
  use Surface.Catalogue.Playground,
    subject: Lotus.Heading,
    catalogue: Lotus.Catalogue,
    height: "110px",
    container: {:div, class: "uk-container"}

  data props, :map,
    default: %{
    }

  def render(assigns) do
    ~F"""
    <Heading :props={ @props } />
    """
  end
end
