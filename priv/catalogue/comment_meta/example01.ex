defmodule Lotus.Catalogue.CommentMeta.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CommentMeta,
    catalogue: Lotus.Catalogue,
    title: "CommentMeta",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CommentMeta>Default</CommentMeta>
    """
  end
end
