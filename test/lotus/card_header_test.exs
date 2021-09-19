defmodule Lotus.CardHeaderTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_card_header

  alias Lotus.CardHeader

  test "Creates a CardHeader" do
    html =
      render_surface do
        ~F"""
        <CardHeader>Hello</CardHeader>
        """
      end

    assert html =~ """
           <div class="uk-card-header">
             Hello
           </div>
           """
  end
end
