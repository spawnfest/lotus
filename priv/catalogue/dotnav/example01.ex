defmodule Lotus.Catalogue.Dotnav.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Dotnav,
    catalogue: Lotus.Catalogue,
    title: "Dotnav",
    height: "80px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  alias Lotus.Page

  def render(assigns) do
    ~F"""
    <Dotnav>
      <Page><a href=""></a></Page>
      <Page><a href=""></a></Page>
      <Page><a href=""></a></Page>
      <Page><a href=""></a></Page>
      <Page page_active><a href=""></a></Page>
      <Page><a href=""></a></Page>
      <Page><a href=""></a></Page>
    </Dotnav>
    """
  end
end
