defmodule Lotus.ThumbnavTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_thumbnav

  alias Lotus.Thumbnav

  test "Creates a Thumbnav" do
    html =
      render_surface do
        ~F"""
        <Thumbnav>Hello</Thumbnav>
        """
      end

    assert html =~ """
           <ul class="uk-thumbnav">
             Hello
           </ul>
           """
  end
end
