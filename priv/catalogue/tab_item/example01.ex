defmodule Lotus.Catalogue.TabItem.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.TabItem,
    catalogue: Lotus.Catalogue,
    title: "TabItem",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <TabItem>Default</TabItem>
    """
  end
end
