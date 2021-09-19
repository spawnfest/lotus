defmodule Lotus.Catalogue.Subnav.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Subnav,
    catalogue: Lotus.Catalogue,
    title: "Subnav",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  alias Lotus.Page

  def render(assigns) do
    ~F"""
    <Subnav>
      <Page page_active><a href="#">Group A</a></Page>
      <Page><a href="#">Group B</a></Page>
      <Page><a href="#">Group C</a></Page>
      <Page><span>Defunct Group</span></Page>
      <Page><a href="#">Group D</a></Page>
    </Subnav>
    """
  end
end
