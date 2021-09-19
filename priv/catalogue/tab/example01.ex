defmodule Lotus.Catalogue.Tab.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Tab,
    catalogue: Lotus.Catalogue,
    title: "Tab",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  alias Lotus.TabItem

  def render(assigns) do
    ~F"""
    <Tab id="tab">
      <TabItem tab_active>
         <a href="#">Tab 1</a>
      </TabItem>
      <TabItem>
         <a href="#">Tab 2</a>
      </TabItem>
      <TabItem>
         <a href="#">Tab 3</a>
      </TabItem>
      <TabItem>
         <a href="#">Tab 4</a>
      </TabItem>
    </Tab>
    """
  end
end
