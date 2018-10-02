class AddStatusToInvestments < ActiveRecord::Migration[5.1]
  def change
    add_column :investments, :status, :integer, default: 0
  end
end
