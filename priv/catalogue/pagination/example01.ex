defmodule Lotus.Catalogue.Pagination.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Pagination,
    catalogue: Lotus.Catalogue,
    title: "Pagination",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  alias Lotus.Page

  def render(assigns) do
    ~F"""
    <Pagination>
      <Page page_active><a href="#">1</a></Page>
      <Page><a href="#">2</a></Page>
      <Page><a href="#">3</a></Page>
      <Page page_disabled><span>4</span></Page>
      <Page><a href="#">5</a></Page>
    </Pagination>
    """
  end
end
