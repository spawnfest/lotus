defmodule Lotus.Catalogue.Progress.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Progress,
    catalogue: Lotus.Catalogue,
    title: "Progress",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Progress value={10} max={100} />
    """
  end
end
