defmodule Lotus.Catalogue.CommentAvatar.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CommentAvatar,
    catalogue: Lotus.Catalogue,
    title: "CommentAvatar",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CommentAvatar>Default</CommentAvatar>
    """
  end
end
