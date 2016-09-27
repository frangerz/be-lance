class AddFieldsToService < ActiveRecord::Migration
  def change
    add_column :services, :user_id, :integer
    add_column :reviews, :user_id, :integer
  end
end
