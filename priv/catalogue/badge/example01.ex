defmodule Lotus.Catalogue.Badge.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Badge,
    catalogue: Lotus.Catalogue,
    title: "Badge",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Badge>Default</Badge>
    <Badge el="a" opts={href: "http://www.google.com"}>Google</Badge>
    """
  end
end
