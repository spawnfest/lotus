defmodule Lotus.DotnavTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_dotnav

  alias Lotus.Dotnav

  test "Creates a Dotnav" do
    html =
      render_surface do
        ~F"""
        <Dotnav>Hello</Dotnav>
        """
      end

    assert html =~ """
           <ul class="uk-dotnav">
             Hello
           </ul>
           """
  end
end
