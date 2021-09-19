defmodule Lotus.Catalogue.CommentHeader.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CommentHeader,
    catalogue: Lotus.Catalogue,
    title: "CommentHeader",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CommentHeader>Default</CommentHeader>
    """
  end
end
