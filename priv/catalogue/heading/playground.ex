defmodule Lotus.Catalogue.Heading.Playground do
  use Surface.Catalogue.Playground,
    subject: Lotus.Heading,
    catalogue: Lotus.Catalogue,
    height: "110px",
    container: {:div, class: "uk-container"}

  data props, :map,
    default: %{
      level: 1
    }

  def render(assigns) do
    ~F"""
    <Heading :props={ @props }>
      Heading {@props.level}
    </Heading>
    """
  end
end
