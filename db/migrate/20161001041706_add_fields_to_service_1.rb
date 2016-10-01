class AddFieldsToService1 < ActiveRecord::Migration
  def change
    add_column :services, :uuid, :string
    add_column :reviews, :uuid, :string
  end
end
