defmodule Lotus.Catalogue.Block.Playground do
  use Surface.Catalogue.Playground,
    subject: Lotus.Block,
    catalogue: Lotus.Catalogue,
    height: "110px",
    container: {:div, class: "uk-container"}

  data props, :map,
    default: %{
    }

  def render(assigns) do
    ~F"""
    <Block :props={ @props } />
    """
  end
end
