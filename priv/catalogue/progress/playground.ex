defmodule Lotus.Catalogue.Progress.Playground do
  use Surface.Catalogue.Playground,
    subject: Lotus.Progress,
    catalogue: Lotus.Catalogue,
    height: "110px",
    container: {:div, class: "uk-container"}

  data props, :map,
    default: %{
    }

  def render(assigns) do
    ~F"""
    <Progress :props={ @props } />
    """
  end
end
