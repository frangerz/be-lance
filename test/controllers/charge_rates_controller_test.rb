require 'test_helper'

class ChargeRatesControllerTest < ActionController::TestCase
  setup do
    @charge_rate = charge_rates(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:charge_rates)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create charge_rate" do
    assert_difference('ChargeRate.count') do
      post :create, charge_rate: { cost: @charge_rate.cost, description: @charge_rate.description, period: @charge_rate.period }
    end

    assert_redirected_to charge_rate_path(assigns(:charge_rate))
  end

  test "should show charge_rate" do
    get :show, id: @charge_rate
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @charge_rate
    assert_response :success
  end

  test "should update charge_rate" do
    patch :update, id: @charge_rate, charge_rate: { cost: @charge_rate.cost, description: @charge_rate.description, period: @charge_rate.period }
    assert_redirected_to charge_rate_path(assigns(:charge_rate))
  end

  test "should destroy charge_rate" do
    assert_difference('ChargeRate.count', -1) do
      delete :destroy, id: @charge_rate
    end

    assert_redirected_to charge_rates_path
  end
end
