#!/bin/bash

# Make git case sensitive
git config core.ignorecase false

# Find all files in git
git ls-files | while read file; do
    # Get the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file")

    # Convert to proper case (assuming the working tree has the correct case)
    proper_case=$(ls "$dir" | grep -i "^$filename\$")

    if [ "$filename" != "$proper_case" ]; then
        echo "Fixing case for: $file -> $dir/$proper_case"
        # Use temporary name to handle case-only changes
        git mv "$file" "$file.tmp"
        git mv "$file.tmp" "$dir/$proper_case"
    fi
done

# Stage all changes
git add .

echo "Case fixes complete. Review changes and commit them."
