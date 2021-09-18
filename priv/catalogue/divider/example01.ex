defmodule Lotus.Catalogue.Divider.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Divider,
    catalogue: Lotus.Catalogue,
    title: "Divider",
    height: "200px",
    direction: "horizontal",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Divider type="small" />
    <Divider type="icon" />
    <Divider type="vertical" />
    """
  end
end
