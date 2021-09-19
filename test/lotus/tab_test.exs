defmodule Lotus.TabTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_tab

  alias Lotus.Tab

  test "Creates a Tab" do
    html =
      render_surface do
        ~F"""
        <Tab id="1">Hello</Tab>
        """
      end

    assert html =~ """
           <ul phx-hook="Lotus.Tab#Tab" id="1">
             Hello
           </ul>
           """
  end
end
