defmodule Lotus.DescriptionListTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_description_list

  alias Lotus.DescriptionList

  test "Creates a DescriptionList" do
    html =
      render_surface do
        ~F"""
        <DescriptionList>
          <dt>Description term</dt>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
          <dt>Description term</dt>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
          <dt>Description term</dt>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
        </DescriptionList>
        """
      end

    assert html =~ """
           <dl class="uk-description-list">
             <dt>Description term</dt>
             <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
             <dt>Description term</dt>
             <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
             <dt>Description term</dt>
             <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
           </dl>
           """
  end

  test "Creates a DescriptionList with divider" do
    html =
      render_surface do
        ~F"""
        <DescriptionList divider>
          <dt>Description term</dt>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
          <dt>Description term</dt>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
          <dt>Description term</dt>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
        </DescriptionList>
        """
      end

    assert html =~ """
           <dl class="uk-description-list uk-description-list-divider">
             <dt>Description term</dt>
             <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
             <dt>Description term</dt>
             <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
             <dt>Description term</dt>
             <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
           </dl>
           """
  end
end
