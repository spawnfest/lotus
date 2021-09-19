defmodule Lotus.Catalogue.Dotnav.Example02 do
  use Surface.Catalogue.Example,
    subject: Lotus.Dotnav,
    catalogue: Lotus.Catalogue,
    title: "Dotnav (Vertical)",
    height: "200px",
    direction: "horizontal",
    container: {:div, class: "uk-container"}

  alias Lotus.Page

  def render(assigns) do
    ~F"""
    <Dotnav vertical>
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
