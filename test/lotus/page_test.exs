defmodule Lotus.PageTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_page

  alias Lotus.Page

  test "Creates a Page" do
    html =
      render_surface do
        ~F"""
        <Page>Hello</Page>
        """
      end

    assert html =~ """
           <li>
             Hello
           </li>
           """
  end
end
