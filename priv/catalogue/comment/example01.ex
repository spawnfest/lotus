defmodule Lotus.Catalogue.Comment.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Comment,
    catalogue: Lotus.Catalogue,
    title: "Comment",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Comment>Default</Comment>
    """
  end
end
