defmodule Lotus.Catalogue.Button.Playground do
  use Surface.Catalogue.Playground,
    subject: Lotus.Button,
    catalogue: Lotus.Catalogue,
    height: "110px",
    container: {:div, class: "uk-container"}

  data props, :map,
    default: %{
      kind: "primary",
      label: "Hello WORLD"
    }

  def render(assigns) do
    ~F"""
    <Button :props={ @props } />
    """
  end
end
