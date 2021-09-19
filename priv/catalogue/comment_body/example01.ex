defmodule Lotus.Catalogue.CommentBody.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CommentBody,
    catalogue: Lotus.Catalogue,
    title: "CommentBody",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CommentBody>Default</CommentBody>
    """
  end
end
