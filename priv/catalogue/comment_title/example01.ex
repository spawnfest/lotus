defmodule Lotus.Catalogue.CommentTitle.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CommentTitle,
    catalogue: Lotus.Catalogue,
    title: "CommentTitle",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CommentTitle>Default</CommentTitle>
    """
  end
end
