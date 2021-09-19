defmodule Lotus.Catalogue.CardFooter.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CardFooter,
    catalogue: Lotus.Catalogue,
    title: "CardFooter",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CardFooter>Default</CardFooter>
    """
  end
end
