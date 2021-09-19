defmodule Lotus.Catalogue.Thumbnav.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Thumbnav,
    catalogue: Lotus.Catalogue,
    title: "Thumbnav",
    height: "200px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  alias Lotus.Page

  def render(assigns) do
    ~F"""
    <Thumbnav>
      <Page page_active><a href=""><img src="https://via.placeholder.com/128" /></a></Page>
      <Page><a href=""><img src="https://via.placeholder.com/128" /></a></Page>
      <Page><a href=""><img src="https://via.placeholder.com/128" /></a></Page>
    </Thumbnav>
    """
  end
end
