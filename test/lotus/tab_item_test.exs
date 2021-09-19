defmodule Lotus.TabItemTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_tab_item

  alias Lotus.TabItem

  test "Creates a TabItem" do
    html =
      render_surface do
        ~F"""
        <TabItem>Hello</TabItem>
        """
      end

    assert html =~ """
           <li class="uk-tab-item">
             Hello
           </li>
           """
  end
end
