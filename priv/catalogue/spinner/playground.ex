defmodule Lotus.Catalogue.Spinner.Playground do
  use Surface.Catalogue.Playground,
    subject: Lotus.Spinner,
    catalogue: Lotus.Catalogue,
    height: "110px",
    container: {:div, class: "uk-container"}

  data props, :map,
    default: %{
      id: "spinner"
    }

  def render(assigns) do
    ~F"""
    <Spinner :props={ @props } />
    """
  end
end
