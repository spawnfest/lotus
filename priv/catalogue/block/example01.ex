defmodule Lotus.Catalogue.Block.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Block,
    catalogue: Lotus.Catalogue,
    title: "Block",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Block>Default</Block>
    """
  end
end
