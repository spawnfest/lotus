defmodule Lotus.Catalogue.Spinner.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Spinner,
    catalogue: Lotus.Catalogue,
    title: "Spinner",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Spinner id="spinner" />
    """
  end
end
